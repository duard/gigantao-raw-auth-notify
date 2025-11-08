import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCUB', ['codnat', 'codcencus', 'codproj', 'data'], {
  unique: true,
})
@Entity('TGFCUB', { schema: 'SANKHYA' })
export class TgfcubEntity {
  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('datetime', { primary: true, name: 'DATA' })
  data: Date;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;
}
