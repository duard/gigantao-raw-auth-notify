import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcfrEntity } from './tGFCFR.entity';

@Index('PK_TGFECT', ['codservico'], { unique: true })
@Entity('TGFECT', { schema: 'SANKHYA' })
export class TgfectEntity {
  @Column('varchar', { primary: true, name: 'CODSERVICO', length: 10 })
  codservico: string;

  @Column('varchar', { name: 'DESCRSERVICO', length: 200 })
  descrservico: string;

  @OneToMany(() => TgfcfrEntity, (tgfcfrEntity) => tgfcfrEntity.servicoect)
  tgfcfrs: TgfcfrEntity[];
}
