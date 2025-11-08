import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwendEntity } from './tGWEND.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwgenEntity } from './tGWGEN.entity';

@Index('PK_TGWFEG', ['codgen', 'codendini'], { unique: true })
@Index('TGWFEG_I01', ['codendini'], {})
@Index('TGWFEG_I02', ['codendfin'], {})
@Index('TGWFEG_I03', ['enderecoini', 'enderecofim', 'codgen'], {})
@Entity('TGWFEG', { schema: 'SANKHYA' })
export class TgwfegEntity {
  @Column('int', { primary: true, name: 'CODGEN' })
  codgen: number;

  @Column('int', { primary: true, name: 'CODENDINI' })
  codendini: number;

  @Column('int', { name: 'CODENDFIN' })
  codendfin: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'ENDERECOINI', nullable: true, length: 30 })
  enderecoini: string | null;

  @Column('varchar', { name: 'ENDERECOFIM', nullable: true, length: 30 })
  enderecofim: string | null;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwfegs)
  @JoinColumn([{ name: 'CODENDINI', referencedColumnName: 'codend' }])
  codendini2: TgwendEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwfegs2)
  @JoinColumn([{ name: 'CODENDFIN', referencedColumnName: 'codend' }])
  codendfin2: TgwendEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwfegs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgwgenEntity, (tgwgenEntity) => tgwgenEntity.tgwfegs)
  @JoinColumn([{ name: 'CODGEN', referencedColumnName: 'codgen' }])
  codgen2: TgwgenEntity;
}
