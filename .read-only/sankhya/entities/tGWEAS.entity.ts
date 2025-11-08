import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwarsEntity } from './tGWARS.entity';
import { TgwendEntity } from './tGWEND.entity';

@Index('PK_TGWEAS', ['codareasep', 'codendini'], { unique: true })
@Index('TGWEAS_I01', ['enderecoini', 'enderecofim', 'codareasep'], {})
@Index('TGWEAS_I02', ['codareasep', 'codendini', 'codendfim'], {})
@Entity('TGWEAS', { schema: 'SANKHYA' })
export class TgweasEntity {
  @Column('int', { primary: true, name: 'CODAREASEP' })
  codareasep: number;

  @Column('int', { primary: true, name: 'CODENDINI' })
  codendini: number;

  @Column('int', { name: 'CODENDFIM' })
  codendfim: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'ENDERECOINI', nullable: true, length: 30 })
  enderecoini: string | null;

  @Column('varchar', { name: 'ENDERECOFIM', nullable: true, length: 30 })
  enderecofim: string | null;

  @ManyToOne(() => TgwarsEntity, (tgwarsEntity) => tgwarsEntity.tgweas)
  @JoinColumn([{ name: 'CODAREASEP', referencedColumnName: 'codareasep' }])
  codareasep2: TgwarsEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgweas)
  @JoinColumn([{ name: 'CODENDINI', referencedColumnName: 'codend' }])
  codendini2: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgweas2)
  @JoinColumn([{ name: 'CODENDFIM', referencedColumnName: 'codend' }])
  codendfim2: TgwendEntity;
}
