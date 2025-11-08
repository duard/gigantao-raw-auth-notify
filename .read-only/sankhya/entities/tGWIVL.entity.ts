import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwrevEntity } from './tGWREV.entity';
import { TgwtcxEntity } from './tGWTCX.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwconEntity } from './tGWCON.entity';

@Index('PK_TGWIVL', ['nuconferencia', 'sequencia'], { unique: true })
@Entity('TGWIVL', { schema: 'SANKHYA' })
export class TgwivlEntity {
  @Column('int', { primary: true, name: 'NUCONFERENCIA' })
  nuconferencia: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('float', { name: 'QTDUNPAD', precision: 53, default: () => '(0)' })
  qtdunpad: number;

  @Column('smallint', { name: 'NUMVOL' })
  numvol: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', {
    name: 'VOLCONTINUO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  volcontinuo: string | null;

  @Column('char', { name: 'VOLPAUSADO', nullable: true, length: 1 })
  volpausado: string | null;

  @ManyToOne(() => TgwrevEntity, (tgwrevEntity) => tgwrevEntity.tgwivls, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDREV', referencedColumnName: 'idrev' }])
  idrev: TgwrevEntity;

  @ManyToOne(() => TgwtcxEntity, (tgwtcxEntity) => tgwtcxEntity.tgwivls)
  @JoinColumn([{ name: 'CODCAIXA', referencedColumnName: 'codcaixa' }])
  codcaixa: TgwtcxEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwivls)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwivls)
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia2: TgwconEntity;
}
