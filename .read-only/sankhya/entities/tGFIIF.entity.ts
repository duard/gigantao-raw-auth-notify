import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFIIF', ['nufin', 'nunota', 'sequencia', 'codimp'], {
  unique: true,
})
@Entity('TGFIIF', { schema: 'SANKHYA' })
export class TgfiifEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODIMP' })
  codimp: number;

  @Column('float', { name: 'BASE', nullable: true, precision: 53 })
  base: number | null;

  @Column('float', { name: 'BASERED', nullable: true, precision: 53 })
  basered: number | null;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('smallint', { name: 'CST', nullable: true })
  cst: number | null;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('varchar', { name: 'TIPBASE', nullable: true, length: 1 })
  tipbase: string | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfiifs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;
}
