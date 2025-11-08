import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwendEntity } from './tGWEND.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWESE', ['codususep', 'dhinicio'], { unique: true })
@Index('TGWESE_I01', ['codususep', 'enderecoini', 'enderecofim'], {})
@Index('TGWESE_I02', ['codususep', 'dhinicio', 'dhfim'], {})
@Entity('TGWESE', { schema: 'SANKHYA' })
export class TgweseEntity {
  @Column('smallint', { primary: true, name: 'CODUSUSEP' })
  codususep: number;

  @Column('varchar', { name: 'ENDERECOINI', length: 30 })
  enderecoini: string;

  @Column('varchar', { name: 'ENDERECOFIM', length: 30 })
  enderecofim: string;

  @Column('datetime', { primary: true, name: 'DHINICIO' })
  dhinicio: Date;

  @Column('datetime', { name: 'DHFIM' })
  dhfim: Date;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwese)
  @JoinColumn([{ name: 'CODENDFIM', referencedColumnName: 'codend' }])
  codendfim: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwese2)
  @JoinColumn([{ name: 'CODENDINI', referencedColumnName: 'codend' }])
  codendini: TgwendEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwese)
  @JoinColumn([{ name: 'CODUSUSEP', referencedColumnName: 'codusu' }])
  codususep2: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwese2)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;
}
