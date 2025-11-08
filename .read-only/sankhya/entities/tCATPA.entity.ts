import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcanotEntity } from './tCANOT.entity';

@Index('PK_TCATPA', ['codtpa'], { unique: true })
@Entity('TCATPA', { schema: 'SANKHYA' })
export class TcatpaEntity {
  @Column('smallint', { primary: true, name: 'CODTPA' })
  codtpa: number;

  @Column('char', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @Column('smallint', { name: 'PESO' })
  peso: number;

  @Column('char', { name: 'TIPOAVL', nullable: true, length: 1 })
  tipoavl: string | null;

  @OneToMany(() => TcanotEntity, (tcanotEntity) => tcanotEntity.codtpa2)
  tcanots: TcanotEntity[];
}
