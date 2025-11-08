import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TCCCOR', ['codcc', 'codparc'], { unique: true })
@Entity('TCCCOR', { schema: 'SANKHYA' })
export class TcccorEntity {
  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('float', { name: 'VLRCOMISSAO', nullable: true, precision: 53 })
  vlrcomissao: number | null;

  @Column('float', { name: 'PERCOMISSAO', nullable: true, precision: 53 })
  percomissao: number | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcccors)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
