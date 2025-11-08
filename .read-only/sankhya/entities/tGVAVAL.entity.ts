import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgvavprEntity } from './tGVAVPR.entity';
import { TgvngaEntity } from './tGVNGA.entity';
import { TgvravEntity } from './tGVRAV.entity';

@Index('PK_TGVAVAL', ['codaval'], { unique: true })
@Entity('TGVAVAL', { schema: 'SANKHYA' })
export class TgvavalEntity {
  @Column('int', { primary: true, name: 'CODAVAL' })
  codaval: number;

  @Column('varchar', { name: 'DESCRAVAL', length: 250 })
  descraval: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('float', { name: 'CORTE', precision: 53, default: () => '(0)' })
  corte: number;

  @Column('varchar', { name: 'TIPORESULT', length: 1, default: () => "'E'" })
  tiporesult: string;

  @OneToMany(() => TgvavprEntity, (tgvavprEntity) => tgvavprEntity.codaval2)
  tgvavprs: TgvavprEntity[];

  @OneToMany(() => TgvngaEntity, (tgvngaEntity) => tgvngaEntity.codaval2)
  tgvngas: TgvngaEntity[];

  @OneToMany(() => TgvravEntity, (tgvravEntity) => tgvravEntity.codaval)
  tgvravs: TgvravEntity[];
}
