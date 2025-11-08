import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TCSGEC', ['numcontrato', 'codparc'], { unique: true })
@Entity('TCSGEC', { schema: 'SANKHYA' })
export class TcsgecEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('float', { name: 'PERCCUSTO', precision: 53 })
  perccusto: number;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcsgecs)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcsgecs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
