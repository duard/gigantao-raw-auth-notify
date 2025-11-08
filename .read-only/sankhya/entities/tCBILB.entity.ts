import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcblbcEntity } from './tCBLBC.entity';

@Index('PK_TCBILB', ['nuliberacao', 'nuchave', 'tabela'], { unique: true })
@Entity('TCBILB', { schema: 'SANKHYA' })
export class TcbilbEntity {
  @Column('int', { primary: true, name: 'NULIBERACAO' })
  nuliberacao: number;

  @Column('int', { primary: true, name: 'NUCHAVE' })
  nuchave: number;

  @Column('varchar', { primary: true, name: 'TABELA', length: 20 })
  tabela: string;

  @Column('char', { name: 'TIPO', nullable: true, length: 2 })
  tipo: string | null;

  @ManyToOne(() => TcblbcEntity, (tcblbcEntity) => tcblbcEntity.tcbilbs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NULIBERACAO', referencedColumnName: 'nuliberacao' }])
  nuliberacao2: TcblbcEntity;
}
