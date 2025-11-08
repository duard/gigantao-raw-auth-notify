import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsigbiEntity } from './tSIGBI.entity';

@Index('PK_TSIGBP', ['codgbi', 'chave'], { unique: true })
@Entity('TSIGBP', { schema: 'SANKHYA' })
export class TsigbpEntity {
  @Column('int', { primary: true, name: 'CODGBI' })
  codgbi: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('varchar', { name: 'VLRTXT', nullable: true, length: 100 })
  vlrtxt: string | null;

  @Column('float', { name: 'VLRDEC', nullable: true, precision: 53 })
  vlrdec: number | null;

  @Column('datetime', { name: 'VLRDAT', nullable: true })
  vlrdat: Date | null;

  @ManyToOne(() => TsigbiEntity, (tsigbiEntity) => tsigbiEntity.tsigbps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODGBI', referencedColumnName: 'codgbi' }])
  codgbi2: TsigbiEntity;
}
