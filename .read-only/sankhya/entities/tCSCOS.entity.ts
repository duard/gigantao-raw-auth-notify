import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsoseEntity } from './tCSOSE.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSCOS', ['codcos'], { unique: true })
@Entity('TCSCOS', { schema: 'SANKHYA' })
export class TcscosEntity {
  @Column('smallint', { primary: true, name: 'CODCOS' })
  codcos: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('char', { name: 'FECHARSLA', nullable: true, length: 1 })
  fecharsla: string | null;

  @Column('char', { name: 'SUSPENDERSLA', nullable: true, length: 1 })
  suspendersla: string | null;

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codcos)
  tcsoses: TcsoseEntity[];

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codcosant)
  tcsoses2: TcsoseEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codcos)
  tgfpros: TgfproEntity[];
}
