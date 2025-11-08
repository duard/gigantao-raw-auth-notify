import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgwsepEntity } from './tGWSEP.entity';

@Index('PK_TGWOND', ['codonda'], { unique: true })
@Entity('TGWOND', { schema: 'SANKHYA' })
export class TgwondEntity {
  @Column('int', { primary: true, name: 'CODONDA' })
  codonda: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODUSU' })
  codusu: number;

  @OneToMany(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.codonda)
  tgwseps: TgwsepEntity[];
}
