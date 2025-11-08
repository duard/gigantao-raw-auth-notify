import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFNOMEBANDEIRA', ['nomebandeira'], { unique: true })
@Entity('TGFNOMEBANDEIRA', { schema: 'SANKHYA' })
export class TgfnomebandeiraEntity {
  @Column('varchar', { primary: true, name: 'NOMEBANDEIRA', length: 30 })
  nomebandeira: string;
}
