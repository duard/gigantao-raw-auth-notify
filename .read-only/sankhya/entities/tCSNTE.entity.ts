import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';

@Index('PK_TCSNTE', ['numcontrato', 'codareaddd', 'numtermtel'], {
  unique: true,
})
@Entity('TCSNTE', { schema: 'SANKHYA' })
export class TcsnteEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('smallint', { primary: true, name: 'CODAREADDD' })
  codareaddd: number;

  @Column('int', { primary: true, name: 'NUMTERMTEL' })
  numtermtel: number;

  @Column('varchar', { name: 'PRINCIPAL', nullable: true, length: 1 })
  principal: string | null;

  @Column('char', { name: 'CODUFIBGE', nullable: true, length: 2 })
  codufibge: string | null;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcsntes)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;
}
